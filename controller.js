import { uuid } from "uuidv4";
import { db } from "./config.js";
import { collection, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { failedReq, successReq } from "./utils/responseReq.js";

const collect = collection(db, "users");

export const getData = async (req, res) => {
  try {
    const datas = await getDocs(collect);
    const response = datas.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    successReq(res, 200, "Success", response);
  } catch (err) {
    failedReq(res, 404, err.message);
  }
};

export const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await getDoc(doc(db, "users", id));
    if (datas.data()) return successReq(res, 200, "Success", { id, ...datas.data() });
    failedReq(res, 400, "User not found");
  } catch (err) {
    failedReq(res, 404, err.message);
  }
};

export const saveUsers = async (req, res) => {
  const data = req.body;
  try {
    await setDoc(doc(db, "users", uuid()), {
      nama: data.nama,
      nim: data.nim,
    });
    successReq(res, 201, "Users saved successfully", data);
  } catch (err) {
    failedReq(res, 404, err.message);
  }
};

export const updateUsers = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    await updateDoc(doc(db, "users", id), {
      nama: data.nama,
      nim: data.nim,
    });
    successReq(res, 201, "Users update successfully", data);
  } catch (err) {
    failedReq(res, 404, err.message);
  }
};

export const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteDoc(doc(db, "users", id));
    successReq(res, 201, "Users delete successfully", id);
  } catch (err) {
    failedReq(res, 404, err.message);
  }
};

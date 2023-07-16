import { firestore } from "./firebaseConfig";
import { 
  addDoc, 
  collection, 
  onSnapshot, 
  doc, 
  updateDoc, 
  query, 
  where 
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users")

export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success("Post has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(postsRef, (response) => {
    setAllStatus(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};

export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id:docs.id};
      })
    );
  });
};

export const getSingleUser = (setcurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setcurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id};
      })[0]
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setcurrentUser) => {

  onSnapshot(userRef, (response) => {
    setcurrentUser(
      response.docs.map((docs) => {
        return {...docs.data(), userID: docs.id };
      }).filter((item) => {
        return item.email === localStorage.getItem("userEmail");
      })[0]
    );
  });
}

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID)

  updateDoc(userToEdit, payload)
  .then(() => {
    toast.success("Profile has been upadated successfully");
  })
  .catch((err) => {
    console.log(err);
  });
}
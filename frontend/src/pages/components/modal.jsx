import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import useForm from "./hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../utils/AuthContext";
import { Link } from "react-router-dom";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const dropOut = {
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const dropOut2 = {
  hidden: {
    y: "0",
    x: "-100vh",
    opacity: 0,
  },
};

const doped = {
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const doped2 = {
  hidden: {
    y: "0",
    x: "100vh",
    opacity: 0,
  },
};

//modal belum login
const Modal = ({ handleClose }) => {
  const { formOpen, close, open } = useForm();

  let {loginUser,register} = useContext(AuthContext)

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.form
          onSubmit={loginUser}
          onClick={(e) => e.stopPropagation()}
          className="modalform orange-gradient"
          variants={formOpen ? dropOut2 : dropOut}
          initial="visible"
          animate="hidden"
          exit="exit"
        >
          <tbody>
            <tr>
              <th>Username</th>
              <td>
                <input name="username" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
              </td>
            </tr>
            <input type="submit" />
          </tbody>
        </motion.form>
        <motion.form
          onSubmit={register}
          className="modalform2 orange-gradient"
          variants={formOpen ? doped : doped2}
          initial="visible"
          animate="hidden"
          exit="exit"
        >
          <tbody>
            <tr>
              <th>Username</th>
              <td>
                <input name="username2" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input name="password2" type="password" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input name="email" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>
                <input name="first_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input name="last_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <input name="phone" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <input type="radio" name="gender" />
                Male
                <input type="radio" name="gender" />
                Female
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <input name="address" type="text" className="form-control" />
              </td>
            </tr>
            <input type="submit" />
          </tbody>
        </motion.form>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className="save-button2"
          onClick={() => (formOpen ? close() : open())}
        >
        {
      formOpen ? "login disini" : "belum daftar ?"}
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;

//modal setelah login
export const Modal2 = ({ handleClose }) => {
  const { formOpen, close, open } = useForm();

  let {logoutUser} = useContext(AuthContext)

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={logoutUser}>Logout</button>
      </motion.div>
    </Backdrop>
  );
};
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

  let { loginUser, register } = useContext(AuthContext);

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
          <div className="log_in">
            <div className="formdesign">
              <span className="logintitle">Hello!</span>
              <div className="field">
                <label className="formlabel">
                  <i className="formicon" class="fas fa-envelope-open"></i>
                </label>
                <input
                  className="forminput"
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                />
              </div>

              <div className="field">
                <label className="formlabel">
                  <i className="formicon" class="fas fa-lock"></i>
                </label>
                <input
                  className="forminput"
                  placeholder="Password"
                  name="password"
                  type="password"
                  required
                />
              </div>

              <div className="field">
                <input className="forminput" type="submit" value="Login" />
              </div>
            </div>
          </div>
        </motion.form>
        <motion.form
          onSubmit={register}
          className="modalform2 orange-gradient"
          variants={formOpen ? doped : doped2}
          initial="visible"
          animate="hidden"
          exit="exit"
        >
          <div className="sign_up">
            <div className="formdesign">
              <span className="signuptitle">Sign Up</span>
              <div className="userdetails">
                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fas fa-user"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Username"
                    name="username2"
                    type="text"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fas fa-lock"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Password"
                    name="password2"
                    type="password"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fas fa-lock"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Confirm Password"
                    name="password22"
                    type="password"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fas fa-envelope-open"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Email Address"
                    name="email2"
                    type="text"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fa fa-id-card"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="First Name"
                    name="first_name"
                    type="text"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="	fa fa-id-card"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Last Name"
                    name="last_name"
                    type="text"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fa fa-phone"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Phone Number"
                    name="phone"
                    type="text"
                    required
                  />
                </div>

                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fa fa-home"></i>
                  </label>
                  <input
                    className="forminput"
                    placeholder="Address"
                    name="address"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div class="gender-details">
                <input type="radio" name="gender" id="dot-1" value="Male" />
                <input type="radio" name="gender" id="dot-2" value="Female" />
                <span class="gender-title">Gender</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Female</span>
                  </label>
                </div>
              </div>

              <div className="field">
                <input className="forminput" type="submit" value="Register" />
              </div>
            </div>
          </div>
        </motion.form>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className="save-button2"
          onClick={() => (formOpen ? close() : open())}
        >
          {formOpen
            ? "Sudah punya akun? Login disini"
            : "Belum punya akun? Daftar disini!"}
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;

//modal setelah login
export const Modal2 = ({ handleClose }) => {
  const { formOpen, close, open } = useForm();

  let { logoutUser } = useContext(AuthContext);

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

import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import useForm from "./hooks/useForm";
import { useContext, useState, useEffect } from "react";
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
  let { user } = useContext(AuthContext);

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
        <div id="profilepage">
          <div id="profiletitle">{user && <p>Hello, {user.username}</p>}</div>
          <button id="logoutbutton" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export const Modal3 = ({ handleClose }) => {
  const { formOpen, close, open } = useForm();

  let { loginUser, register } = useContext(AuthContext);

  let [first_name, setFirst_name] = useState([]);
  let [last_name, setLast_name] = useState([]);
  let [phone, setPhone] = useState([]);
  let [address, setAddress] = useState([]);
  let [bank, setBank] = useState([]);

  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    var value3 = sessionStorage.getItem("value2");
    let response = await fetch(`/api/items/${value3}/single/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let BuyItem = async () => {
    console.log(notes[0][0]);
    let response = await fetch(
      `/api/submit/${bank}/${first_name} ${last_name}/${phone}/${address}/${
        notes[0][3] * valuex
      }/${valuex}/${notes[0][1]}/${valuez}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    await response.json();

    if (response.status === 200) {
      window.location.reload();
    } else {
      logoutUser();
    }
  };

  var valuex = sessionStorage.getItem("valuex");
  var valuez = sessionStorage.getItem("valuez");

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        id="modalshop"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modalform orange-gradient"
          id="shop-div-2"
          variants={formOpen ? dropOut2 : dropOut}
          initial="visible"
          animate="hidden"
          exit="exit"
        >
          <div className="sign_up" id="shop-div-3">
            <div className="formdesign">
              <span className="signuptitle">Details of recipient</span>
              <div className="checkoutdetails">
                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fa fa-id-card"></i>
                  </label>
                  <input
                    className="forminput"
                    value={first_name}
                    onInput={(e) => {
                      setFirst_name(e.target.value);
                    }}
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
                    value={last_name}
                    onInput={(e) => {
                      setLast_name(e.target.value);
                    }}
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
                    value={phone}
                    onInput={(e) => {
                      setPhone(e.target.value);
                    }}
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
                    value={address}
                    onInput={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Address"
                    name="address"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div class="gender-details">
                <input
                  type="radio"
                  name="bank"
                  id="dot-1"
                  value="BCA"
                  onInput={(e) => {
                    setBank("BCA");
                  }}
                />
                <input
                  type="radio"
                  name="bank"
                  id="dot-2"
                  value="BNI"
                  onInput={(e) => {
                    setBank("BNI");
                  }}
                />
                <span class="gender-title">Virtual Account</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">BCA</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">BNI</span>
                  </label>
                </div>
              </div>

              <div className="field">
                <input
                  className="forminput"
                  type="button"
                  value="Submit"
                  onClick={() => {
                    open();
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="modalform2 orange-gradient"
          variants={formOpen ? doped : doped2}
          initial="visible"
          animate="hidden"
          exit="exit"
          id="bool"
        >
          <div className="sign_up" id="shop-div-3">
            <div className="formdesign">
              <span className="signuptitle">Confirm details</span>
              <div className="userdetails">
                <div className="field">
                  <label className="formlabel">First Name :</label>
                  <p>{first_name}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Last Name :</label>
                  <p>{last_name}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Phone :</label>
                  <p>{phone}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Address :</label>
                  <p>{address}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Bank :</label>
                  <p>{bank}</p>
                </div>
              </div>

              <div className="userdetails">
                {notes.map((user) => (
                  <div className="field">
                    <label className="formlabel">Product :</label>
                    <p>
                      {user[1]} {valuez} - Rp. {user[3]}, Quantity : {valuex},
                      Subtotal : Rp. {user[3] * valuex}
                    </p>
                  </div>
                ))}
              </div>

              <button onClick={BuyItem}>Confirm</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

export const Modal4 = ({ handleClose }) => {
  const { formOpen, close, open } = useForm();

  let { loginUser, register } = useContext(AuthContext);

  let [first_name, setFirst_name] = useState([]);
  let [last_name, setLast_name] = useState([]);
  let [phone, setPhone] = useState([]);
  let [address, setAddress] = useState([]);
  let [bank, setBank] = useState([]);

  let [notes, setNotes] = useState([]);
  let [notes2, setNotes2] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);
  useEffect(() => {
    getNotes2();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/carts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let getNotes2 = async () => {
    let response = await fetch("/api/price/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes2(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let BuyItem = async () => {
    let response = await fetch(
      `/api/submitcart/${bank}/${first_name} ${last_name}/${phone}/${address}/${notes2[2]}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    await response.json();

    if (response.status === 200) {
      window.location.reload();
    } else {
      logoutUser();
    }
  };
  let DeleteCart = async () => {
    let response = await fetch("/api/deletecart2/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    await response.json();

    if (response.status === 200) {
      window.location.reload();
    } else {
      logoutUser();
    }
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        id="modalshop"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modalform orange-gradient"
          id="shop-div-2"
          variants={formOpen ? dropOut2 : dropOut}
          initial="visible"
          animate="hidden"
          exit="exit"
        >
          <div className="sign_up" id="shop-div-3">
            <div className="formdesign">
              <span className="signuptitle">Details of recipient</span>
              <div className="checkoutdetails">
                <div className="field">
                  <label className="formlabel">
                    <i className="formicon" class="fa fa-id-card"></i>
                  </label>
                  <input
                    className="forminput"
                    value={first_name}
                    onInput={(e) => {
                      setFirst_name(e.target.value);
                    }}
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
                    value={last_name}
                    onInput={(e) => {
                      setLast_name(e.target.value);
                    }}
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
                    value={phone}
                    onInput={(e) => {
                      setPhone(e.target.value);
                    }}
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
                    value={address}
                    onInput={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Address"
                    name="address"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div class="gender-details">
                <input
                  type="radio"
                  name="bank"
                  id="dot-1"
                  value="BCA"
                  onInput={(e) => {
                    setBank("BCA");
                  }}
                />
                <input
                  type="radio"
                  name="bank"
                  id="dot-2"
                  value="BNI"
                  onInput={(e) => {
                    setBank("BNI");
                  }}
                />
                <span class="gender-title">Virtual Account</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">BCA</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">BNI</span>
                  </label>
                </div>
              </div>

              <div className="field">
                <input
                  className="forminput"
                  type="button"
                  value="Submit"
                  onClick={() => {
                    open();
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="modalform2 orange-gradient"
          variants={formOpen ? doped : doped2}
          initial="visible"
          animate="hidden"
          exit="exit"
          id="bool"
        >
          <div className="sign_up" id="shop-div-3">
            <div className="formdesign">
              <span className="signuptitle">Confirm details</span>
              <div className="userdetails">
                <div className="field">
                  <label className="formlabel">First Name :</label>
                  <p>{first_name}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Last Name :</label>
                  <p>{last_name}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Phone :</label>
                  <p>{phone}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Address :</label>
                  <p>{address}</p>
                </div>

                <div className="field">
                  <label className="formlabel">Bank :</label>
                  <p>{bank}</p>
                </div>
              </div>

              <div className="userdetails">
                {notes.map((user) => (
                  <div className="field">
                    <label className="formlabel">Product :</label>
                    <p>
                      {user[0]} {user[1]} - Rp. {user[3]}, Quantity : {user[2]},
                      Subtotal : Rp. {user[4]}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  BuyItem();
                  DeleteCart();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

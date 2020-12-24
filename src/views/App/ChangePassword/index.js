import React, { useEffect, useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { showFlashMessage } from "../../../services/app/actions";
import { getLoggedAccount } from "../../../services/app/getHelper";
import MessageType from "../../../services/app/MessageType";
import UserRepo from "../../../services/user/repo";
import styles from "./styles";

const ChangePassword = (props) => {
  const { navigation } = props;
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const loggedAccount = useSelector(getLoggedAccount);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      const values = {
        id: loggedAccount.id,
        oldPass: oldPassword,
        newPass: confirmPassword,
      };
      try {
        const res = await UserRepo.changePassword(values);
        if (res.message) {
          dispatch(
            showFlashMessage({
              type: MessageType.Type.INFO,
              description: res.message,
            })
          );
          setPassword("");
          setOldPassword("");
          setConfirmPassword("");
        }
      } catch (e) {
        dispatch(
          showFlashMessage({
            type: MessageType.Type.DANGER,
            description: e?.response?.data?.message,
          })
        );
      }
    } else {
      dispatch(
        showFlashMessage({
          type: MessageType.Type.DANGER,
          description: "Password and Confirm password not match!",
        })
      );
    }
  };

  useEffect(() => {}, []);

  return useMemo(() => {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={{}}
          secureTextEntry={true}
          label="Old Password"
          value={oldPassword}
          onChangeText={(password) => setOldPassword(password)}
          theme={{
            colors: {
              label: "white",
              text: "white",
              placeholder: "white",
              background: "#0f1014",
              selectionColor: "#fff",
            },
          }}
        />
        <TextInput
          style={{}}
          secureTextEntry={true}
          label="New Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          theme={{
            colors: {
              label: "white",
              text: "white",
              placeholder: "white",
              background: "#0f1014",
              selectionColor: "#fff",
            },
          }}
        />
        <TextInput
          style={{}}
          secureTextEntry={true}
          label="Confirm New Password"
          value={confirmPassword}
          onChangeText={(password) => setConfirmPassword(password)}
          theme={{
            colors: {
              label: "white",
              text: "white",
              placeholder: "white",
              background: "#0f1014",
              selectionColor: "#fff",
            },
          }}
        />

        <TouchableOpacity style={styles.foot} onPress={() => handleSubmit()}>
          <Text style={styles.submit}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }, [oldPassword, password, confirmPassword]);
};

export default ChangePassword;

/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { useAuthController } from "context/authContext";
import { Alert } from "@mui/material";
import { login } from "services/api/authAPI";
import { storeItem } from "utils/storeData";
import { LOCAL_STORAGE } from "constants/storage-constants";
import { LOGIN_SUCCESS } from "context/authContext";
import { LOGIN_ERROR } from "context/authContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controller, dispatch] = useAuthController();
  const { accessToken, error } = controller;

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const doLogin = async () => {
    try {
      const { user, accessToken, refreshToken } = await login(email, password);
      storeItem(LOCAL_STORAGE, "token", accessToken);
      storeItem(LOCAL_STORAGE, "refreshToken", refreshToken);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user, accessToken, refreshToken },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_ERROR, payload: error.response?.data || error.message || error });
    }
  };

  return (
    <CoverLayout
      title="Ch??o m???ng quay tr??? l???i"
      description="Nh???p email v?? m???t kh???u c???a b???n ????? ????ng nh???p"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          {error && (
            <SoftBox mb={1} ml={0.5}>
              <Alert severity="error">
                C?? l???i x???y ra ??? <strong>{error}</strong>
              </Alert>
            </SoftBox>
          )}
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Nh???p email"
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              M???t kh???u
            </SoftTypography>
          </SoftBox>
          <SoftInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Nh???p m???t kh???u"
          />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            disabled={!(email && password)}
            onClick={doLogin}
            variant="gradient"
            color="info"
            fullWidth
          >
            ????ng nh???p
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;

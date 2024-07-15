import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { Box, Button, Checkbox, Divider, Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 12,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect({
      scopes: ["user.read"]
    }).catch(e => {
      console.error(e);
    });
  };

  const initialValues = {
    email: "",
    password: "",
    remember: true,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleLogin();
      setSubmitting(false);
    },
  });

  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center" bgcolor="background.paper">
      <Box maxWidth={1200} width="100%" display="flex">
        <Box width="50%" bgcolor="primary.main" p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
          <Typography variant="h4">Hi, Welcome Back!</Typography>
          <Typography variant="body1" mt={2}>You are in a good company</Typography>
          <Box mt={4}>
            <Typography variant="body2">A product is something a brand is something that is bought by the customer.</Typography>
            <Box mt={2} display="flex" justifyContent="space-around" width="100%">
              <Typography variant="caption">amazon</Typography>
              <Typography variant="caption">GoDaddy</Typography>
              <Typography variant="caption">Google</Typography>
              <Typography variant="caption">adidas</Typography>
              <Typography variant="caption">dribbble</Typography>
              <Typography variant="caption">YAHOO!</Typography>
            </Box>
          </Box>
        </Box>
        <Box width="50%" p={4}>
          <Typography variant="h4">Sign In</Typography>
          <Typography variant="body1" mt={1} mb={3}>New user? <a href="/register">Create an Account</a></Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Enter your work email"
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.touched.password && formik.errors.password}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Checkbox
                      name="remember"
                      checked={formik.values.remember}
                      onChange={formik.handleChange}
                    />
                    <Typography>Remember me</Typography>
                  </Box>
                  <Typography component="a" href="#" color="error">Forget Password?</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  loading={formik.isSubmitting}
                >
                  Sign In
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
          <Divider sx={{ my: 3 }}>OR</Divider>
          <Box display="flex" justifyContent="center" gap={2}>
            <StyledButton onClick={handleLogin}>
              Sign in with Office365
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

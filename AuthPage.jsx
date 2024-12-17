import React, { useState } from "react";
import "../components/AuthPage.css";

function AuthPage() {
  const [currentPage, setCurrentPage] = useState("login"); // "login", "register", "forgotPassword"

  const renderSocialLogin = () => (
    <div className="social-login">
      <p>Hoặc đăng nhập bằng</p>
      <div className="social-buttons">
        <button className="facebook-button">Facebook</button>
        <button className="google-button">Google</button>
      </div>
    </div>
  );

  const renderPageContent = () => {
    switch (currentPage) {
      case "login":
        return (
          <>
            <h1>Đăng nhập tài khoản</h1>
            <form className="auth-form">
              <div className="form-group">
                <div>Nếu bạn đã có tài khoản </div>
                <br></br>
                <label>Email *</label>
                <input type="email" placeholder="Nhập email" />
              </div>
              <div className="form-group">
                <label>Mật khẩu *</label>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <button type="submit" className="submit-button">Đăng nhập</button>
            </form>
            {renderSocialLogin()}

            {/* Phần quên mật khẩu luôn hiển thị */}
            <div className="forgot-password">
              <div>Nếu bạn quên mật khẩu hãy nhập email vào đây</div>
              <br></br>
              <form className="auth-fom">
                <div className="fom-group">
                  <label>Email *</label>
                  
                  <input type="email" placeholder="Email" />
                </div>
                <button type="submit" className="subit-button">Khôi phục mật khẩu</button>
              </form>
            </div>

            <div className="toggle-auth-mode">
              <button
                onClick={() => setCurrentPage("register")}
                className="toggle-button"
              >
                Chưa có tài khoản? Đăng ký
              </button>
            </div>
          </>
        );

      case "register":
        return (
          <>
            <h1>Đăng ký tài khoản</h1>
            <form className="auth-form">
              <div className="form-row">
                <div className="form-group half">
                  <label>Họ *</label>
                  <input type="text" placeholder="Nhập họ" />
                </div>
                <div className="form-group half">
                  <label>Tên *</label>
                  <input type="text" placeholder="Nhập tên" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Số điện thoại *</label>
                  <input type="tel" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group half">
                  <label>Email *</label>
                  <input type="email" placeholder="Nhập email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Mật khẩu *</label>
                  <input type="password" placeholder="Nhập mật khẩu" />
                </div>
              </div>
              <button type="submit" className="submit-button">Đăng ký</button>
            </form>
            {renderSocialLogin()}
            <div className="toggle-auth-mode">
              <button
                onClick={() => setCurrentPage("login")}
                className="toggle-button"
              >
                Đã có tài khoản? Đăng nhập
              </button>
            </div>
          </>
        );

      case "forgotPassword":
        return (
          <>
            <h1>Quên mật khẩu</h1>
            <form className="auth-form">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Nhập email để khôi phục mật khẩu" />
              </div>
              <button type="submit" className="submit-button">Khôi phục mật khẩu</button>
            </form>
            <div className="toggle-auth-mode">
              <button
                onClick={() => setCurrentPage("login")}
                className="toggle-button"
              >
                Quay lại Đăng nhập
              </button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return <div className="auth-container">{renderPageContent()}</div>;
}

export default AuthPage;

import { useNavigate } from "react-router-dom"; // useNavigate をインポート
import "../css/Signup.css"; // CSSファイルのインポート

const SignUp = () => {
  const history = useNavigate(); // ヒストリーを取得

  // ボタンがクリックされたときの処理
  const handleSignUp = () => {
    // サインアップの処理を行う場合はここに記述
    // 今回は簡易的に、サインアップ後に '/main' ページに遷移するようにする
    history.push("/main");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>サインアップ</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">ユーザーネーム</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            className="signup-button"
            onClick={handleSignUp}
          >
            サインアップ
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

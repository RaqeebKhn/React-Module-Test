import './MainPage.css'

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content-container">
        <img src="" alt="" className="main-illustration" />
        <h1 className="title">Pocket Notes</h1>
        <p className="description">
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <div className="encryption-banner">
          <span className="lock-icon">🔒</span>
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </div>
  )
}

export default MainPage
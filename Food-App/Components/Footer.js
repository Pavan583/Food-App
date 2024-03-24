const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      Created By
      <i className="fa-regular fa-face-grin-hearts"></i>
      <a href="https://www.linkedin.com/in/pavankumar6577/" target="_blank">
        Pavan Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Taste<span>Trek</span>
      </strong>
    </div>
  )
}

export default Footer

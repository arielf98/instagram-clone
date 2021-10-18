import ImageProfile from "../../atom/ImageProfile"

export default function profileIcon() {

  const profileIconStyle: string = "w-6 h-6 rounded-full "
  return (
    <div className={profileIconStyle}>
      <ImageProfile 
        imgUrl="https://source.unsplash.com/daily"
        style={profileIconStyle} />
    </div>
  )
}

import  ImageProfile from "../atom/ImageProfile"

export default function SidebarContent() {
 
  const sidebarAccount: string = "h-14 w-14 rounded-full"
  return (
     
        <div className="w-full  h-20 flex flex-row ">
          <div className={sidebarAccount}>
            <ImageProfile 
              imgUrl = "https://source.unsplash.com/daily"
              style={sidebarAccount}  />
          </div>
          <div className="pl-2">
              <div className="h-20 w-36">
                <div>
                  username
                </div>
                <div>
                  nama akun
                </div>
              </div>
              
          </div>
          <div className="pl-20">
            switch
          </div>
        </div>
  )
}

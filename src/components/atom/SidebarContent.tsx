import  ImageProfile from "../atom/ImageProfile"

export default function SidebarContent() {
 
  const sidebarAccount: string = "h-14 w-14 rounded-full"
  return (
     
        <div className="w-full  h-20 flex flex-row ">
          <div className={sidebarAccount}>
            <ImageProfile 
              imgUrl = "https://source.unsplash.com/daily"
              styles={sidebarAccount}  />
          </div>
          <div className="pl-2">
              <div className="h-20 w-36">
                <p className="font-sans font-semibold subpixel-antialiased hover: cursor-pointer ">
                  username
                </p>
                <p className="font-sans font-light subpixel-antialiased text-gray-500 capitalize">
                  nama akun
                </p>
              </div>
          </div>
          <p className="pl-20 font-sans capitalize font-medium text-sm subpixel-antialiased text-blue-600 hover: cursor-pointer">
            switch
          </p>
        </div>
  )
}

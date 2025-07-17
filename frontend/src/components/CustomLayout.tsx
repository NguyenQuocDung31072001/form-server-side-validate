import React from "react"

type CustomLayoutProps = {
  children: React.ReactNode
}

export const CustomLayout: React.FC<
  CustomLayoutProps
> = ({ children }) => (
  <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100">
    <div className="w-full max-w-[70%] min-w-[500px] p-8 bg-white rounded-xl shadow-lg">
      {children}
    </div>
  </div>
)

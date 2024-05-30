import SideNavigation from "../_components/SideNavigation";

export const metadata = {
  title:{
    template:"%s account",
    default:"welcome in account"
  }
}

export default function Layout({children}){
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation/>
      <div className="py-1">{children}</div>
    </div>
  )
}
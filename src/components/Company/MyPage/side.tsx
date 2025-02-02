import { Button } from "@/components/ui/button";
import { mdiEmailOutline, mdiFileOutline, mdiLogout, mdiMagnify, mdiMessageReplyOutline } from "@mdi/js";
import Icon from "@mdi/react";


export function Side() {
    const navItems: any[] = [
        {icon: mdiMagnify, label:"人材を探す", isActive: true},
        {icon: mdiFileOutline, label: '案件一覧', isActive:false},
        {icon: mdiMessageReplyOutline, label: 'チャット', isActive:false},
        {icon: mdiLogout, label: 'ログアウト', isActive:false}
    ];

  return (
    <aside className='w-64 bg-white shadow-md pt-6'>
        <nav className=''>
            {navItems.map((item, index) => (
                <div key={index} className={`py-4 pl-2 flex items-center space-x-3 cursor-pointer ${item.isActive ? 'text-blue-500 font-bold bg-blue-100': 'text-gray-700'}`}>
                    <Icon path={item.icon} size={1}/>
                    <span className='text-base'>{item.label}</span>
                </div>
            ))}
        </nav>
        <div className="w-full m-4">
            <Button className='mt-6 flex items-center justify-center gap-2'>
                <Icon path={mdiEmailOutline} size={1.2}/>CONTACT
            </Button>
        </div>
        </aside>
  )}

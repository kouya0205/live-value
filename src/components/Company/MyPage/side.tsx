import { Button } from "@/components/ui/button";
import { mdiEmailOutline, mdiFileOutline, mdiLogout, mdiMagnify, mdiMessageReplyOutline } from "@mdi/js";
import Icon from "@mdi/react";


export function Side() {
  return (
    <aside className='w-72 bg-white shadow-md p-6'>
        <nav className='space-y-4'>
            {[{icon: mdiMagnify, label:"人材を探す"},
            {icon: mdiFileOutline, label: '案件一覧'},
            {icon: mdiMessageReplyOutline, label: 'チャット'},
            {icon: mdiLogout, label: 'ログアウト'}].map((item, index) => (
                <div key={index} className='flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer'>
                <Icon path={item.icon} size={1.5}  horizontal color="blue"/>
                <span className='text-lg'>{item.label}</span>
                </div>
            ))}
        </nav>
            <Button className='mt-6 w-full bg-blue-500 hover:bg-blue-700 flex items-center justify-center gap-2'>
                <Icon path={mdiEmailOutline} size={1.2}/>CONTACT
            </Button>
        </aside>
  )}

import {Button} from '../components/catalyst/button'
type ClueAvatarProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

export default function ClueButton({ onClick, children}: ClueAvatarProps) {
  return (
     <Button
      type="button" 
      color="yellow"
     className="animate-bounce motion-reduce:animate-none rounded-full cursor-pointer"
     onClick={onClick}
>
        <span className="sr-only">Click on the icon to get more clues</span>
       {children}
     </Button>
  )
}

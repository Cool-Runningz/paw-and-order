import { AvatarButton } from "../components/catalyst/avatar";
import type { Cat } from '../store/types';

type CatAvatarProps = {
    cat: Cat
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CatAvatar({cat, onClick}: CatAvatarProps) {
  return (
    <div className="hover:transform-[scale(1.15)] duration-300 ease-in">
   <AvatarButton
        type="button"
        src={cat.imgSrc}
        alt={cat.name}
        onClick={onClick}
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#744B93] shadow-xl cursor-pointer"

      />
       <div className="cat-label">
          <span>{cat.name}</span>
        </div>
      </div>
  )
}

// Main character GIF used across most screens
export const Kitty = ({ size = 120 }: { mood?: string; size?: number }) => {
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <img 
        src="/main_doll.gif" 
        alt="Cute character" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

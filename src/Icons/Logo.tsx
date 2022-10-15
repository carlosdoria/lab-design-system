import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={120}
      viewBox="0 0 106 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3_61)" fill="#81D8F7">
        <path d="M105.743 60.01c0-6.976-8.773-13.587-22.222-17.687 3.103-13.653 1.724-24.514-4.354-27.992-1.401-.816-3.04-1.202-4.828-1.202v4.787c.991 0 1.789.193 2.457.558 2.931 1.674 4.203 8.05 3.211 16.25-.237 2.018-.625 4.143-1.099 6.31-4.224-1.03-8.837-1.824-13.686-2.339-2.91-3.971-5.928-7.578-8.967-10.733 7.027-6.504 13.622-10.067 18.105-10.067v-4.787c-5.927 0-13.686 4.207-21.532 11.505-7.845-7.255-15.605-11.42-21.532-11.42v4.787c4.462 0 11.079 3.542 18.105 10.003A101.477 101.477 0 0040.5 38.695c-4.87.515-9.483 1.31-13.708 2.361a64.49 64.49 0 01-1.12-6.225c-1.014-8.2.237-14.575 3.146-16.271.647-.386 1.488-.558 2.479-.558v-4.787c-1.81 0-3.449.386-4.871 1.202-6.057 3.478-7.415 14.318-4.29 27.927C8.73 46.466 0 53.056 0 60.011c0 6.976 8.772 13.588 22.222 17.688-3.104 13.652-1.724 24.514 4.354 27.991 1.4.816 3.039 1.202 4.85 1.202 5.927 0 13.686-4.207 21.532-11.505 7.845 7.255 15.604 11.42 21.532 11.42 1.81 0 3.448-.387 4.87-1.203 6.057-3.477 7.415-14.317 4.29-27.927 13.363-4.1 22.093-10.711 22.093-17.666zM77.68 45.694c-.798 2.769-1.79 5.624-2.91 8.479a101.357 101.357 0 00-2.824-5.152 116.007 116.007 0 00-3.103-5.023 97.62 97.62 0 018.837 1.696zm-9.872 22.861c-1.681 2.898-3.406 5.646-5.194 8.2-3.212.28-6.466.43-9.743.43-3.254 0-6.509-.15-9.699-.408a118.288 118.288 0 01-5.216-8.157 111.652 111.652 0 01-4.483-8.544 111.773 111.773 0 014.462-8.565c1.68-2.898 3.405-5.645 5.194-8.2 3.212-.279 6.466-.43 9.742-.43 3.255 0 6.51.151 9.7.409a118.315 118.315 0 015.216 8.157 111.616 111.616 0 014.483 8.543 120.01 120.01 0 01-4.462 8.565zm6.962-2.79a91.723 91.723 0 012.974 8.543 97.063 97.063 0 01-8.88 1.717 118.534 118.534 0 003.104-5.087 121.736 121.736 0 002.802-5.173zM52.914 88.668a88.59 88.59 0 01-5.992-6.87c1.94.087 3.923.15 5.928.15 2.026 0 4.03-.042 5.992-.15a83.901 83.901 0 01-5.928 6.87zM36.878 76.024a97.585 97.585 0 01-8.837-1.695c.798-2.77 1.79-5.625 2.91-8.48a101.6 101.6 0 002.824 5.152 142.046 142.046 0 003.103 5.023zm15.929-44.67a88.612 88.612 0 015.992 6.869c-1.94-.086-3.923-.15-5.928-.15-2.026 0-4.03.042-5.992.15a83.881 83.881 0 015.928-6.87zm-15.95 12.643a118.438 118.438 0 00-5.906 10.24 91.763 91.763 0 01-2.974-8.544 105.086 105.086 0 018.88-1.696zM17.35 70.873C9.72 67.63 4.785 63.38 4.785 60.01S9.72 52.369 17.35 49.149c1.853-.794 3.88-1.503 5.97-2.168 1.229 4.207 2.845 8.586 4.85 13.073-1.983 4.465-3.578 8.822-4.785 13.008a65.641 65.641 0 01-6.035-2.19zm11.596 30.674c-2.932-1.674-4.203-8.05-3.212-16.25.237-2.017.625-4.142 1.1-6.31 4.224 1.03 8.836 1.824 13.686 2.34 2.91 3.97 5.927 7.577 8.966 10.732-7.026 6.505-13.622 10.068-18.105 10.068-.97-.022-1.789-.215-2.435-.58zM80.072 85.19c1.013 8.2-.237 14.576-3.147 16.271-.646.387-1.487.559-2.478.559-4.462 0-11.079-3.542-18.106-10.004a101.465 101.465 0 008.902-10.711c4.871-.515 9.484-1.31 13.708-2.361.496 2.168.884 4.25 1.121 6.246zm8.298-14.317c-1.853.794-3.88 1.502-5.97 2.168-1.229-4.208-2.845-8.587-4.85-13.073 1.983-4.465 3.578-8.823 4.785-13.009a68.529 68.529 0 016.057 2.19c7.63 3.241 12.566 7.492 12.566 10.862-.022 3.37-4.958 7.642-12.588 10.861z" />
        <path d="M52.85 69.82c5.44 0 9.85-4.391 9.85-9.81 0-5.417-4.41-9.81-9.85-9.81-5.44 0-9.85 4.393-9.85 9.81 0 5.419 4.41 9.81 9.85 9.81z" />
      </g>
      <defs>
        <clipPath id="clip0_3_61">
          <path fill="#fff" d="M0 0H105.743V120H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

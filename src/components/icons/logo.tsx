import { cn } from "@/lib/utils";
import * as React from "react";

const Logo = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 256 100"
    ref={ref}
    className={cn("fill-current", className)}
    {...props}
  >
    <path d="M255.679 50S227.312 100 128 100C28.687 100 .321 50 .321 50S28.687 0 128 0c99.312 0 127.679 50 127.679 50ZM115.66 34.132s-.763 3.134-11.794 3.949c-11.032.815-12.247-2.173-12.247-2.173s.763-3.134 11.794-3.949c11.032-.815 12.247 2.173 12.247 2.173Zm-23.764-6.374-5.995.625-2.507 27.928-4.595.48 2.354-25.933c.082-.925.077-1.463-.016-1.614-.07-.182-.306-.278-.71-.29l-2.182-.055.105-1.142 3.077-.321.216-2.203c.122-1.413.441-2.712.959-3.897a7.406 7.406 0 0 1 2.363-3.033c1.087-.814 2.522-1.313 4.307-1.5 1.679-.175 3.025.008 4.038.549 1.011.513 1.703 1.222 2.075 2.126.399.9.48 1.848.242 2.842l-4.461 1.112c.447-2.013.49-3.404.129-4.174-.337-.799-.985-1.149-1.944-1.049a2.53 2.53 0 0 0-1.401.59c-.401.338-.742.912-1.023 1.722-.283.784-.495 1.924-.637 3.419l-.268 3.017 5.994-.625-.12 1.426Zm-27.727-6.703-.07 1.146 2.18-.024c.404-.003.644.085.718.264.071.152.08.692.024 1.619L65.8 45.082c-.104 1.908.248 3.332 1.057 4.273.806.913 1.938 1.267 3.397 1.061 1.061-.15 1.97-.562 2.728-1.237.758-.675 1.358-1.666 1.801-2.972l-1.652-.659c-.229 1.06-.531 1.832-.906 2.318-.376.486-.749.755-1.12.807-.398.057-.644-.206-.738-.788-.097-.608-.081-1.881.046-3.819l1.395-24.09-7.639 1.079ZM60.752 48.48c-.679 1.786-1.668 3.126-2.968 4.02-1.305.868-2.681 1.435-4.13 1.704-1.922.355-3.597.202-5.023-.459-1.4-.667-2.47-1.749-3.21-3.245-.717-1.528-1.053-3.399-1.007-5.613l.026-.903c.063-1.917.465-3.652 1.206-5.205a11.158 11.158 0 0 1 3.177-3.978c1.355-1.067 2.942-1.769 4.759-2.106 1.37-.253 2.549-.24 3.539.04.99.279 1.777.746 2.363 1.4a4.006 4.006 0 0 1 1.058 2.173c.208 1.377-.075 2.641-.85 3.792-.774 1.15-1.934 2.168-3.479 3.053-1.523.853-3.339 1.557-5.448 2.111l-1.484.397c.01 5.28 1.517 7.642 4.519 7.086.58-.107 1.194-.343 1.843-.708.645-.392 1.224-.948 1.738-1.67.541-.726.906-1.624 1.097-2.694l2.274.805Zm-11.451-5.926-.032 1.68 1.253-.314c1.876-.483 3.271-1.109 4.184-1.877.935-.799 1.524-1.656 1.765-2.572.267-.921.339-1.792.215-2.613-.151-1.006-.506-1.744-1.064-2.212-.535-.5-1.225-.672-2.067-.516-1.186.219-2.176 1.015-2.971 2.387-.799 1.346-1.227 3.358-1.283 6.037Zm-17.488 19c-1.589.382-3.078.507-4.467.374-1.39-.133-2.565-.635-3.527-1.504-.935-.876-1.536-2.204-1.803-3.984l2.587-1.614c.189 1.799.614 3.128 1.273 3.988.659.859 1.484 1.377 2.472 1.551.984.149 2.049.085 3.194-.191 1.953-.471 3.353-1.262 4.198-2.374.872-1.118 1.153-2.466.844-4.043-.206-1.051-.642-1.882-1.307-2.493-.67-.637-1.765-1.075-3.285-1.314l-3.809-.652c-1.582-.28-2.903-.897-3.963-1.853-1.039-.988-1.732-2.363-2.077-4.124-.299-1.525-.239-2.957.18-4.297.44-1.372 1.257-2.56 2.451-3.563 1.215-1.036 2.839-1.798 4.87-2.288 1.692-.407 3.15-.483 4.373-.227 1.223.256 2.216.732 2.98 1.429.764.697 1.304 1.503 1.619 2.418.342.908.463 1.801.362 2.679l-4.486 1.948c.307-2.469.037-4.331-.809-5.586-.846-1.255-2.232-1.651-4.159-1.186-1.433.344-2.501 1.015-3.206 2.01-.684.963-.871 2.233-.562 3.811.227 1.156.668 2.082 1.322 2.778.681.689 1.713 1.156 3.097 1.401l3.849.642c1.665.287 3.023.882 4.072 1.785 1.076.897 1.774 2.161 2.093 3.79a8.341 8.341 0 0 1-.313 4.452c-.508 1.444-1.432 2.713-2.772 3.806-1.314 1.087-3.078 1.898-5.291 2.431Zm88.163-43.291-.195 1.126 2.171.268c.402.051.63.17.685.357.054.161.003.697-.153 1.608l-3.509 20.595c-.156.911-.287 1.461-.393 1.649-.106.162-.387.271-.842.327l-2.249.296-.195 1.126 11.009-.07.195-1.127-2.171-.267c-.402-.051-.63-.156-.685-.317-.054-.187-.003-.736.153-1.648l3.509-20.594c.155-.912.286-1.449.393-1.61.133-.189.413-.311.842-.367l2.249-.296.195-1.126-11.009.07Zm47.391 26.685c-.644 1.197-1.395 2.053-2.25 2.568-.855.515-1.816.743-2.886.682-1.471-.083-2.544-.654-3.219-1.711-.675-1.085-.781-2.553-.319-4.405l1.922-7.698c.46-1.825.535-3.162.225-4.011-.281-.874-.782-1.332-1.505-1.373-.481-.027-1.064.101-1.747.384-.655.258-1.376.767-2.162 1.528-.785.733-1.598 1.814-2.442 3.242l-2.939 13.153-4.613-.261 2.988-13.352c.406-1.828.469-3.166.185-4.014-.254-.873-.743-1.329-1.465-1.37-.481-.027-1.064.101-1.746.384-.657.258-1.377.767-2.163 1.527-.785.761-1.6 1.855-2.443 3.282l-2.977 13.111-4.613-.261 3.751-16.809c.202-.901.28-1.433.234-1.597-.045-.19-.267-.323-.666-.4l-2.153-.403.252-1.113 7.461.423-.861 3.854c1.167-1.436 2.353-2.455 3.56-3.058 1.235-.627 2.495-.905 3.779-.832 1.418.08 2.536.533 3.356 1.357.847.826 1.304 1.952 1.373 3.378 1.167-1.49 2.37-2.549 3.605-3.177 1.264-.652 2.55-.942 3.861-.868 1.818.103 3.153.809 4.004 2.118.879 1.311 1.037 3.104.476 5.379l-1.83 7.422c-.433 1.826-.663 3.047-.691 3.663-.002.617.211.937.639.962.375.021.786-.171 1.233-.574.448-.404.869-1.105 1.263-2.102l1.523.972Zm12.678 5.717c.629.676 1.488 1.084 2.578 1.224 1.062.138 2.035-.02 2.916-.473.882-.453 1.681-1.255 2.393-2.404l-1.461-1.08c-.451.967-.912 1.637-1.382 2.008-.47.371-.891.533-1.263.485-.398-.052-.58-.372-.545-.962.038-.616.328-1.834.869-3.654l4.01-13.941-1.075-.139c-.63.351-1.29.617-1.982.797-.665.184-1.313.317-1.94.398-.917-1.523-2.398-2.416-4.444-2.681a8.58 8.58 0 0 0-4.214.509c-1.347.528-2.558 1.411-3.63 2.649-1.072 1.239-1.9 2.833-2.483 4.783l-.251.858c-.585 1.977-.806 3.825-.665 5.544.17 1.723.694 3.141 1.573 4.253.906 1.117 2.169 1.779 3.79 1.989a6.82 6.82 0 0 0 3.187-.358c1.065-.402 2.098-1.254 3.096-2.556.015 1.136.323 2.053.923 2.751Zm-8.007-3.748c-.274-1.493-.004-3.673.808-6.537l.578-2.032c.605-2.163 1.345-3.822 2.22-4.978.902-1.153 2.044-1.64 3.425-1.461.691.089 1.349.363 1.974.822.653.435 1.144 1.147 1.471 2.134l-2.813 9.843c-.82 1.406-1.603 2.452-2.348 3.139-.717.663-1.368 1.092-1.953 1.287-.558.171-1.021.232-1.394.184-1.009-.13-1.665-.931-1.968-2.401Zm33.242 9.415a12.917 12.917 0 0 1-2.39 4.209c-1.03 1.25-2.347 2.16-3.951 2.73-1.608.597-3.532.685-5.769.265-2.08-.391-3.512-1.205-4.297-2.442-.787-1.237-1.022-2.711-.705-4.422l2.335-.134c-.384 1.808-.304 3.144.241 4.009.566.896 1.416 1.451 2.547 1.663 1.554.292 2.929-.021 4.125-.941 1.22-.887 2.294-2.688 3.223-5.4l.881-2.572c-.99.985-1.994 1.614-3.01 1.886a6.669 6.669 0 0 1-2.901.108c-1.605-.301-2.834-1.036-3.684-2.204-.851-1.167-1.32-2.617-1.407-4.35-.06-1.727.247-3.562.923-5.506l.291-.844c.673-1.916 1.573-3.463 2.7-4.64 1.129-1.178 2.391-1.989 3.786-2.436a8.52 8.52 0 0 1 4.225-.268c2.027.381 3.475 1.361 4.343 2.941.63-.045 1.282-.141 1.954-.287a8.736 8.736 0 0 0 1.974-.691l1.066.2-6.5 19.126Zm-9.21-11.495c-.945 2.818-1.316 4.982-1.114 6.491.233 1.487.863 2.327 1.889 2.52.369.07.835.035 1.397-.105.594-.161 1.277-.55 2.048-1.168.775-.644 1.605-1.646 2.49-3.005l3.263-9.642c-.28-1.006-.734-1.759-1.362-2.258-.627-.499-1.283-.813-1.968-.942-1.395-.262-2.569.158-3.523 1.259-.927 1.106-1.744 2.723-2.449 4.851l-.671 1.999Zm27.369 17.484c1.505-.295 2.871-1.132 4.1-2.513l-1.834-1.687c-.536.916-1.177 1.6-1.921 2.052-.719.459-1.443.737-2.172.835-.723.071-1.371.037-1.943-.102-2.968-.723-3.568-3.542-1.801-8.455l1.506.244c2.14.356 4.057.452 5.755.287 1.727-.185 3.143-.653 4.247-1.403s1.791-1.808 2.063-3.174c.161-.815.077-1.634-.25-2.457-.323-.85-.895-1.609-1.716-2.278-.823-.669-1.91-1.168-3.264-1.498-1.795-.437-3.5-.44-5.114-.007a9.98 9.98 0 0 0-4.28 2.386c-1.207 1.138-2.162 2.586-2.866 4.342l-.328.829c-.787 2.04-1.105 3.918-.955 5.635.183 1.697.809 3.144 1.881 4.342 1.098 1.204 2.597 2.037 4.497 2.5a10.53 10.53 0 0 0 4.395.122Zm-5.103-11.201.594-1.55c.954-2.467 2.026-4.161 3.219-5.082 1.197-.948 2.381-1.279 3.552-.993.833.203 1.413.647 1.74 1.333.36.666.44 1.498.242 2.496-.162.815-.52 1.595-1.078 2.34-.531.752-1.364 1.307-2.499 1.664-1.103.337-2.605.342-4.505.017l-1.265-.225Z" />
  </svg>
));

Logo.displayName = "Logo";

export default Logo;

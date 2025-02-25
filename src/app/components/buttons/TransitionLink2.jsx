import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function TransitionLink2({ href, Label }) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const pageAnimation = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          opacity: 0,
          filter: "blur(10px)",
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
        easing: "cubic-bezier(0.79, 0.14, 0.15, 0.86)",
      }
    );
    document.documentElement.animate(
      [
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
        },
      ],
      {
        delay: 1200,
        duration: 1000,
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
        easing: "cubic-bezier(0.79, 0.14, 0.15, 0.86)",
      }
    );
  };
  return (
    <a
      className="darken"
      href={href}
      scroll={"0"}
      onClick={(e) => {
        e.preventDefault();
        if (pathname !== href) {
          router.push(`${href}`, {
            onTransitionReady: pageAnimation,
          });
        }
      }}
    >
      {Label}
    </a>
  );
}

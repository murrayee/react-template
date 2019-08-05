import { useCallback, useEffect, useState } from "react";

const useAnimation = (ref: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);

  const resetAnimating = useCallback(() => {
    setAnimating(false);
    if (!visible) {
      setDisplay(false);
    }
  }, [visible]);

  useEffect(() => {
    if (ref) {
      ref.addEventListener("transitionend", resetAnimating, false);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("transitionend", resetAnimating);
      }
    };
  }, [resetAnimating, ref]);

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setActive(true);
      }, 10);
    }
  }, [display]);

  const set = useCallback<any>(
    (flag: boolean) => {
      if (flag === visible) {
        return;
      }
      if (animating) {
        // 终结未完成动画的状态(停止未完成动画而不会让动画直接执行完)
        setDisplay(visible);
        setActive(visible);
        setAnimating(false);
      }
      // 开始自动动画行为
      setTimeout(() => {
        setVisible(flag);
        setAnimating(true);
        if (flag) {
          // 进入时，先更新display，然后激活动画
          setDisplay(true);
        } else {
          // 离开时，先激活动画，待动画完成再更新display
          setActive(false);
        }
      }, 10);
    },
    [visible, animating]
  );
  return [display, active, set];
};

export default useAnimation;

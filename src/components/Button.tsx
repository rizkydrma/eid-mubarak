import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';

enum ButtonVariant {
  'default',
}

type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
} & HTMLMotionProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, children, variant = 'default', ...rest }, ref) {
    return (
      <motion.button
        {...rest}
        className={clsx(
          'rounded-full px-4 py-2 font-bold text-sm shadow-md',
          className
        )}
      >
        {children}
      </motion.button>
    );
  }
);

export default Button;

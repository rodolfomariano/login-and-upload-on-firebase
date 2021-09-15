import { ReactElement, ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface LoginSocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  title: string
}

export function LoginSocialButton({ icon, title, ...props }: LoginSocialButtonProps) {
  return (
    <button className={styles.container} {...props}>
      {icon}
      <span className={styles.title}>
        {title}
      </span>
    </button>
  )
}
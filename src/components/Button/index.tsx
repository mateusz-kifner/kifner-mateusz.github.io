// import Styles from './styles.module.scss';

function Button({ children }) {
  return (
    <span class="px-5 py-2 border-solid border-4 rounded-sm font-open-sans text-xl text-brand-purple font-bold self-start ml-2 border-brand-purple hover:text-brand-blue hover:border-brand-blue transition-all">
      {children}
    </span>
  )
}

export default Button

// node modules
import { motion, type Variants } from 'motion/react'

// motion variants
const sceletonVariants: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const sceletonChildVariants: Variants = {
  start: { opacity: 0.5 },
  end: {
    opacity: 1,
  },
}

export const Sceleton = () => {
  const sceletonLines: number[] = [1, 2, 3]

  return (
    <motion.div variants={sceletonVariants} initial='start' animate='end'>
      {sceletonLines.map(item => (
        <motion.div
          key={item}
          className='sceleton'
          variants={sceletonChildVariants}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        ></motion.div>
      ))}
    </motion.div>
  )
}

import React, { type FC } from 'react'

// motion
import { motion, type Variants } from 'motion/react'

// motion variants
const progressbarVariant: Variants = {
  start: {
    scaleY: 0,
  },
  end: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.2,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.1,
      ease: `easeOut`,
    },
  },
}

const activeIndicatorVariant: Variants = {
  start: {
    translateX: '-100%',
  },
  end: {
    translateX: '200%',
  },
}

interface ProgressProps {
  classes?: string
  size?: string
}

export const CircularProgress: FC<ProgressProps> = ({
  classes = '',
  size = '',
}) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    ></div>
  )
}

export const LinearProgress: FC<ProgressProps> = ({
  classes = '',
  size = '',
}) => {
  return (
    <motion.div
      variants={progressbarVariant}
      initial='start'
      animate='end'
      exit='exit'
      role='progressbar'
      className={`linear-progress ${size} ${classes}`}
    >
      <motion.div
        variants={activeIndicatorVariant}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.2, 0, 0, 1],
        }}
        className='active-indicator'
      ></motion.div>
    </motion.div>
  )
}

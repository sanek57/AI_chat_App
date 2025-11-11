import React, { type FC } from 'react'

// components
import type { ISnackbarState } from '../context/SnackbarContext'

// motion
import { motion, type Variants, AnimatePresence } from 'motion/react'

// motion variants
const snackbarVariant: Variants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      ease: [0.05, 0.7, 0.1, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
}

const snackbarChildVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

interface SnackbarProps {
  snackbar: ISnackbarState
}

export const Snackbar: FC<SnackbarProps> = ({ snackbar }) => {
  return (
    <AnimatePresence>
      {snackbar.open && (
        <motion.div
          className={`snackbar ${snackbar.type}`}
          variants={snackbarVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <motion.span
            variants={snackbarChildVariant}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeIn' }}
          >
            {snackbar.message}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

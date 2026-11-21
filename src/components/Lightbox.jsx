import { useCallback, useEffect, useRef, useState } from 'react'
import { imgSrc } from './Img'
import Icon from './Icon'

/** Returns [open(items, index), element]. items: [{ image, alt, caption? }] */
export function useLightbox() {
  const [state, setState] = useState(null)
  const open = useCallback((items, index = 0) => setState({ items, index }), [])
  const el = state ? <Lightbox {...state} onClose={() => setState(null)} onIndex={(i) => setState((s) => ({ ...s, index: i }))} /> : null
  return [open, el]
}

function Lightbox({ items, index, onClose, onIndex }) {
  const ref = useRef(null)
  const touch = useRef(null)
  const n = items.length
  const go = useCallback((d) => onIndex((index + d + n) % n), [index, n, onIndex])

  useEffect(() => {
    const d = ref.current
    d.showModal()
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const item = items[index]
  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - (touch.current ?? 0)
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
      aria-label="Galerie photo"
    >
      <figure className="lightbox__figure">
        <img key={item.image} src={imgSrc(item.image)} alt={item.alt} />
        <figcaption>
          <span>{item.caption ?? item.alt}</span>
          <span className="lightbox__count">
            {index + 1} / {n}
          </span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox__btn lightbox__close" onClick={() => ref.current.close()} aria-label="Fermer">
        <Icon name="close" size={22} />
      </button>
      {n > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label="Photo précédente">
            <Icon name="chevronLeft" size={24} />
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label="Photo suivante">
            <Icon name="chevronRight" size={24} />
          </button>
        </>
      )}
    </dialog>
  )
}

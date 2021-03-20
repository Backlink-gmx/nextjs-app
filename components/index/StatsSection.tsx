import React, { useEffect, useState} from 'react'
import styl from '../blog/blog.module.css'
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  IDocumentCardLogoProps,
  DocumentCardDetails,
  IDocumentCardPreviewProps,
  DocumentCardImage
} from 'office-ui-fabric-react/lib-commonjs/DocumentCard'
import { FontIcon } from 'office-ui-fabric-react/lib-commonjs/Icon';
import { ImageFit } from 'office-ui-fabric-react/lib-commonjs/Image';
import { dark } from '@theme/dark'
import { useInView } from 'react-intersection-observer'
type ThemeProps = {
  theme?: any
  children?: any
}

export const StatsSection: React.FunctionComponent<ThemeProps> = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })
  const imgSrc = "https://i.pinimg.com/originals/3e/3f/a3/3e3fa377f87714932e3d6cdf28890d46.jpg"
  const { theme=dark } = props
  let iconColor
  let textColor
  try {
    if (theme === dark) {
      iconColor= theme.palette.themePrimary
      textColor='-internal-root-color'
    } else {
      iconColor= theme.palette.white
      textColor=theme.palette.themePrimary
    }
  } catch(err) {
    iconColor = '#333333'
  }
  const titleStyle = {
    fontSize: '2rem',
    fontFamily: 'Coda Caption',
    color: textColor
  }
  const subtitleStyle = {
    color: textColor
  }
  const iconStyle = {
    fontSize: '1.2rem',
    color: iconColor
  }
  return (
    <div style={{ justifyContent: 'space-around' }} className='stats-wrapper'>
      <div style={{ margin: 'auto', textAlign: 'center' }} className='card-image-section'>
        <DocumentCard
            aria-label="Document Card."
            style={{ textAlign: 'center', maxWidth: '100%' }}
          > 
            <div style={{backgroundColor: iconColor, height: 350, width: '100%', background: iconColor}}>
              <DocumentCardImage height={350} imageFit={ImageFit.cover} imageSrc={imgSrc}/>
            </div>
            <DocumentCardDetails>
              <div className={ inView ? 'animate--fade-in-left' : '' }>
                <DocumentCardTitle title="Die Möglichkeiten ein defektes Auto online zu verkaufen" shouldTruncate />
                <DocumentCardTitle title="Es ist ein weit verbreitetes Szenario - Sie haben Ihr Auto komplettiert und bleiben jetzt dabei. Aber ein kaputtes oder beschädigtes Auto ist tatsächlich Geld in der Tasche und ein Gewicht, das Sie aus dem Kopf verlieren." showAsSecondaryTitle />
              </div>
            </DocumentCardDetails>
          </DocumentCard>
      </div>
      <div className={styl.w} ref={ref}>
        <div style={{marginTop: '50px'}}>
          <div className={ inView ? 'animate--fade-in-left' : ''}>
            <div className={styl.j}>
            <h2>
            Die Möglichkeiten ein defektes Auto online zu verkaufen
            </h2>
            <span style={subtitleStyle}>
            Es ist ein weit verbreitetes Szenario - Sie haben Ihr Auto komplettiert und bleiben jetzt dabei. Aber ein kaputtes oder beschädigtes Auto ist tatsächlich Geld in der Tasche und ein Gewicht, das Sie aus dem Kopf verlieren.
            </span>
            <div style={subtitleStyle}>
            So können Sie Ihr defektes Auto gegen Bargeld verkaufen.
            </div>
            <div style={subtitleStyle}>
            Finden Sie heraus, wie Sie 
            </div>
            </div>
          </div>

          <p style={iconStyle}><FontIcon iconName="Globe" /> Ein defektes Fahrzeug verkaufen können</p>
          <p style={iconStyle}><FontIcon iconName="IncidentTriangle" /> wo Sie am besten ein beschädigtes Auto verkaufen können </p>
          <p style={iconStyle}><FontIcon iconName="LightningBolt" /> wie Sie das meiste Geld für den Verkauf Ihres defekten Autos erhalten</p>

        </div>
      </div>
    </div>
  )
}

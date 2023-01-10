import pkg from 'next-fluent/package.json'
import { Localized, useLocalization } from 'next-fluent'
import type { FC } from 'react'

export const Footer: FC = () => {
  const { l10n } = useLocalization()

  return (
    <footer>
      <p>{l10n.getString('description')}</p>
      <p>next-fluent v{pkg.version}</p>
      <p
        style={{
          fontSize: 'smaller',
          fontStyle: 'italic',
          marginTop: 20,
        }}
      >
        <Localized id="helpFluent" elems={{
          1:    <a href="https://projectfluent.com" target="_new" />
        }}>
        </Localized>
      </p>
    </footer>
  )
}

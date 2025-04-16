
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'Arabic' },
]


export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const handleChange = (newLocale: string) => {
    // Remove current locale from path if it's prefixed
    const pathSegments = pathname.split('/')
    const firstSegment = pathSegments[0]

    console.log("firstSegment:",firstSegment);
    let newPath = ''

    const restOfPath = '';
    if (['en', 'ar'].includes(firstSegment)) {
      // Remove locale prefix
      pathSegments.splice(1, 1)
    }

    // const restOfPath = pathSegments.join('/')

    // Add new locale if it's NOT 'en'
    newPath = newLocale === 'en' ? `/en` : `/${newLocale}/${restOfPath}`
    
    // Clean up double slashesen
    newPath = newPath.replace(/\/+/g, '/')

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <select
      className="border border-gray-300 rounded px-2 py-1 text-sm"
      onChange={(e) => handleChange(e.target.value)}
      value={locale}
      disabled={isPending}
    >
      {locales.map(({ code, label }) => (
        <option key={code} value={code} style={{color:'#000'}}> 
          {label}
        </option>
      ))}
    </select>
  )
}

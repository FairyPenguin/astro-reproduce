import { FloatingWhatsApp } from 'react-floating-whatsapp'

function WhatsApp() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber='01122334455'
        accountName='X-tech'
        avatar={'https://cdn-icons-png.flaticon.com/128/9168/9168755.png'}
        darkMode={false}
        allowEsc={true}
      />
    </>
  )
}

export default WhatsApp

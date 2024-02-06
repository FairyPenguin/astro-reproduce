import { Accordion } from '@ark-ui/react'
// import { ChevronDownIcon } from './icons'

const Collapsible = () => {
  return (
    <Accordion.Root defaultValue={['React']} collapsible>
      {['React', 'Solid', 'Vue'].map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              {/* <ChevronDownIcon /> */}
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Collapsible

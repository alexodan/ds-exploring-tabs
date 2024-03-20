import { Tabs } from 'tabbynt'

export default function TabsWithTabbynt() {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">
        <div>
          <h3>Account</h3>
          <p>Account content</p>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <div>
          <h3>Password</h3>
          <p>Password content</p>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}

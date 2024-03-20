import * as Tabs from '@radix-ui/react-tabs'
import styles from './radix.module.css'

const TabsWithRadix = () => (
  <>
    <h2>Tabs with Radix</h2>
    <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
      <Tabs.List className={styles.TabsList} aria-label="Manage your account">
        <Tabs.Trigger className={styles.TabsTrigger} value="tab1">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab2">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={styles.TabsContent} value="tab1">
        Tab content 1
      </Tabs.Content>
      <Tabs.Content className={styles.TabsContent} value="tab2">
        Tab content 2
      </Tabs.Content>
    </Tabs.Root>
  </>
)

export default TabsWithRadix

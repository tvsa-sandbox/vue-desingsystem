import Baselink from '../../components/BaseLink.vue'
export default {
  title: 'Accesories/Baselink',
  component: Baselink,
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
    color: {
      control: 'color',
      defaultValue: 'white',
    },
    bgc: {
      control: 'color',
      defaultValue: null,
    },
  },
}

export const BASELINK = (arg, { argTypes }) => ({
  components: { Baselink },
  props: Object.keys(argTypes),
  template: '<Baselink v-bind="$props" />',
})

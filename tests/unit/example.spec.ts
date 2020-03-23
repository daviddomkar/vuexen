import { shallowMount } from '@vue/test-utils';
import VxCenter from '@/components/VxCenter.vue';

describe('VxCenter.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(VxCenter, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

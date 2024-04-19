import { describe, expect, test, vi } from 'vitest';
import { useRouter } from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import NotFoundPage from './NotFoundPage.vue';

vi.mock('vue-router');

describe('NotFounePage', () => {
  (useRouter as any).mockReturnValue({
    push: vi.fn(),
  });

  test('mount component', async () => {
    expect(NotFoundPage).toBeTruthy();

    const wrapper = shallowMount(NotFoundPage);

    expect(wrapper.text()).toContain('Not found');
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.get('button').trigger('click');

    expect(useRouter().push).toHaveBeenCalledWith('/');
  });
});

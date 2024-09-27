import PageWrapper from '@/app/wrapper';
import logo from '@/assets/logo-green.png';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

function OnboardingCreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <PageWrapper title="OKR | onboarding">
      <section className="bg-stone-100 min-h-screen px-4 flex justify-center items-center">
        <div className="border flex flex-col gap-2 bg-white shadow-sm rounded-lg  px-6 py-8 items-center justify-center w-full  md:w-[500px]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={logo} alt="logo" className="size-20" />
            <h2 className="font-bold text-2xl">Welcome to OKR</h2>
            <p className="font-medium ">
              Let's get you started. Create a company
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="company name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <div className="self-start">
            Joining a company?{' '}
            <Link
              to="/onboarding/join"
              className="text-primary hover:text-primary/50"
            >
              Click here
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default OnboardingCreatePage;
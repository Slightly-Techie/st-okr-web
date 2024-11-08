import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import ArrowDown from "@/assets/arrow-down.svg";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { ClipboardCheckIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/ui/wrapper";

const FormSchema = z.object({
  inviteUser: z.string({
    required_error: "Enter the email of the users you want to invite",
  }),
});

const InviteOthers = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <PageWrapper title="Create Company - OKR">
      <div className="w-full flex flex-col min-h-screen">
        <header className="px-8 py-6 mb-3">
          <Link to="/">
            <img src={Logo} alt="okr-logo" className="" />
          </Link>
        </header>
        <main className="w-full mt-[15vh] lg:mt-[10vh] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="md:space-y-2">
              <h1 className="text-xl lg:text-4xl font-bold">
                Invite others to join your company{" "}
              </h1>
              <p className="text-sm lg:text-xl font-medium  text-black/50">
                Continue to invite others
              </p>
            </div>

            <section className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b">
                <p className="text-sm lg:text-lg font-bold">Enter Email</p>
                <div className="flex gap-3 items-center bg-gray-50 p-1 md:p-2 border border-dashed border-[#0000001A] rounded-md ">
                  <p className="text-xs font-light text-black/80">JOJUPCCU</p>
                  <ClipboardCheckIcon className="stroke-[#047358]" size={16} />
                </div>
              </div>

              <Form {...form}>
                <form
                  className="w-full space-y-12"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="w-full flex flex-col gap-7">
                    <section className="w-full flex gap-2">
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name="inviteUser"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="py-5 md:py-6 text-base rounded-xl"
                                  placeholder="Enter Email To Invite Users"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#047358] rounded-xl font-semibold text-base py-5 md:py-6"
                      >
                        Invite
                      </Button>
                    </section>

                    <section className="w-full flex flex-col gap-4">
                      <div className="flex justify-between gap-4 text-xs md:text-base font-semibold">
                        <div className="flex items-center gap-1 md:gap-4">
                          <span className="py-0.5 px-2 md:px-2.5 border border-slate-500 border-dashed rounded-full text-sm md:text-lg font-medium md:font-semibold text-[#00000099]">
                            R
                          </span>
                          <p className="text-[#475467] font-medium">
                            Richmond.khaitey@example.com
                          </p>
                          <p className="px-2 bg-gray-50 font-normal border text-[#047358] rounded-md md:rounded-lg">
                            Sent
                          </p>
                        </div>
                        <div className="border bg-gray-50 px-1 md:px-2 flex rounded-md items-center gap-1">
                          <p className=" text-gray-500  text-xs md:text-sm">
                            Can View
                          </p>
                          <img className="" src={ArrowDown} alt="arrow-down" />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 text-xs md:text-base font-semibold">
                        <div className="flex items-center gap-1 md:gap-4">
                          <span className="py-0.5 px-2 md:px-2.5 border border-slate-500 border-dashed rounded-full text-base md:text-lg font-medium md:font-semibold text-[#00000099]">
                            J
                          </span>
                          <p className="text-[#475467] font-medium">
                            jane.smith@example.com
                          </p>
                          <p className="px-2 bg-gray-50 font-normal border text-[#047358] rounded-md md:rounded-lg">
                            Sent
                          </p>
                        </div>
                        <div className="border bg-gray-50 px-1 md:px-2 flex rounded-md items-center gap-1">
                          <p className=" text-gray-500  text-xs md:text-sm">
                            Can View
                          </p>
                          <img className="" src={ArrowDown} alt="arrow-down" />
                        </div>
                      </div>
                    </section>
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#047358] w-full py-5 md:py-6 text-base md:text-lg rounded-xl font-semibold "
                  >
                    Continue
                  </Button>
                </form>
              </Form>
            </section>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};

export default InviteOthers;

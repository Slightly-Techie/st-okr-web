import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageWrapper from "@/components/ui/wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CreateCompanySuccess from "./create-company-success";

// Dummy value
const companyTypes = [{ value: "finance", label: "Finance" }];

const FormSchema = z.object({
  companyName: z
    .string({
      required_error: "Please enter the name of the company.",
    })
    .min(6, "Company name must be at least 6 characters long"),
  companyDescription: z.string({
    required_error: "Please provide a description of your company.",
  }),
  companyType: z.string({
    required_error: "Please select company type.",
  }),
});

const CreateCompany = () => {
  const [creationSuccess, setCreationSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setCreationSuccess(true);
  };

  return (
    <PageWrapper title="Create Company - OKR">
      <main className="createCompany-page-container">
        <img src={Logo} alt="okr-logo" className="logo" />

        {creationSuccess ? (
          <CreateCompanySuccess />
        ) : (
          <div>
            <h1 className="title">Welcome to OKR Admin Portal</h1>
            <p className="desc">Continue to create your company</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>

                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Enter company description"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyType"
                  render={({ field }) => (
                    <FormItem id="company-type">
                      <FormLabel>Select Company Type</FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {companyTypes.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-2 primary-button" type="submit">
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        )}
      </main>
    </PageWrapper>
  );
};

export default CreateCompany;

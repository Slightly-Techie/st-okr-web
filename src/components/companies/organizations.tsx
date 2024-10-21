import { Button } from "../ui/button";

export default function Organizations() {
  return (
    <article className="w-full flex flex-col gap-6 p-4">
      {["_", "_", "_", "_", "_", "_"].map((_item, index) => (
        <OrganizationItem key={index} />
      ))}
    </article>
  );
}

function OrganizationItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/c948/26f7/a9f6c6b78e733be9ef5cf337357e7b31?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxeKIg11uC9xLn0oeKA181ewWVL5gTigF3GI5yvhSHZcRzbpKyYgUrmBp0JuZPSBg0YIsk9dyy38iMDjA3Q34lH2NcWKV22iK1XKB~sFMI149uoZZyS5PhiWCj3WYpw~JkKZknNDLyMio4qqDU-E6~FZGtzJeBNPkzNBxTJoZ7A43BpMdCvu7GGFnideU3hcwdsw98ArOvsza69YfZKbjFaqUCUZW~GlceTe1FNnYZBV-0us~OAiVIaWzqn53dTvU6BJNuO3BkCm5N~ktNZtyl-3qzA0VJT7k5W0aCxJZKkllbhZjyOppGdjvijjX9TFCLp~QstT2X23S3HWn5wFAg__"
          className="w-[50px] border border-black/10 h-[40.29px] rounded-[8px]"
          alt="company_name"
        />
        <div>
          <h5 className="text-sm">Hubtel</h5>
          <p className="text-xs line-clamp-1 mt-0.5 text-black/50">
            Order Food from anywhere, purchase airtime and data.
          </p>
        </div>
      </div>
      <Button className="bg-[#047358] font-bold p-3 rounded-[12px] hover:bg-[#047358]">
        Continue
      </Button>
    </div>
  );
}

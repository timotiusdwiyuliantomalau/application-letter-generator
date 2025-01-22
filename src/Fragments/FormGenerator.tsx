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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { setFormValue } from "../../slice/appSlice";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function GeneratorPage() {
  const defaultValues: any = {};
  const objectSchema: any = [];
  const [isLoading,setIsLoading]=useState(false);

  const [experienceHistories, setExperienceHistories] = useState([
    [
      { name: "jenis_pengalaman", placeholder: "Type of Experience" },
      { name: "nama_pekerjaan", placeholder: "Job Name" },
      { name: "nama_perusahaan", placeholder: "Company Name" },
      { name: "durasi_pengalaman", placeholder: "Duration of Experience" },
      {
        name: "deskripsi_pengalaman",
        placeholder: "Description of Experience",
      },
    ],
  ]);
  const yourProfile = [
    { placeholder: "Full Name", name: "nama_lengkap" },
    { placeholder: "Address", name: "alamat_rumah" },
    { placeholder: "Phone Number", name: "nomor_telepon" },
    { placeholder: "Email", name: "email" },
  ];
  const companyProfile = [
    { name: "nama_perusahaan", placeholder: "Company Name" },
    { name: "alamat_perusahaan", placeholder: "Company Address" },
    { name: "pekerjaan_dilamar", placeholder: "Job Name" },
  ];

  [...yourProfile, ...companyProfile].forEach((field) => {
    defaultValues[field.name] = "";
  });

  [...yourProfile, ...companyProfile].forEach((field) => {
    objectSchema[field.name] = z
      .string()
      .min(1, `${field.placeholder} is required`);
  });

  objectSchema["apakah_punya_pengalaman"] = z
    .string()
    .min(1, "Have exprience field is required");
  defaultValues["apakah_punya_pengalaman"] = "";
  objectSchema["daftar_skill"] = z.string().min(1, "Skill field is required");
  defaultValues["daftar_skill"] = "";
  experienceHistories.forEach((field, i) => {
    field.forEach((item) => {
      if (item.name == "durasi_pengalaman") {
        defaultValues[item.name + (i + 1)] = "0";
        return;
      }
      defaultValues[item.name + (i + 1)] = "";
    });
  });
  experienceHistories.forEach((field, i) => {
    field.forEach((item) => {
      objectSchema[item.name + (i + 1)] = z.string();
    });
  });

  const formSchema = z.object({
    ...objectSchema,
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: any) => {
    setIsLoading(true);
    experienceHistories.forEach((field, i) => {
      field;
      data["durasi_pengalaman" + (i + 1)] =
        data["durasi_pengalaman" + (i + 1)] + "bulan";
    });
    dispatch(setFormValue(data)); // Menampilkan nilai form
    setTimeout(()=>{setIsLoading(false)},3000)
  };

  return (
    <div className="w-3/4 z-10 text-xl">
       {isLoading && (
          <>
            <div className="bg-black opacity-70 min-h-screen w-full fixed top-0 left-0 z-20"></div>
            <img className="w-72 fixed left-1/2 -translate-x-1/2 z-50" src="./roket.gif" alt="" />
            
          </>
        )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="font-bold mx-auto flex flex-col gap-8 font-caveat"
        >
          <div className="grid gap-4 bg-white p-5 rounded-xl">
            <p className="text-center">Your Profile</p>
            <div className="grid grid-cols-2 gap-3">
              {yourProfile.map((item) => (
                <FormField
                  control={form.control}
                  name={item.name}
                  key={item.name}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="relative">
                        {item.placeholder}{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={`input your ${item.placeholder.toLowerCase()}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <FormField
              control={form.control}
              name="apakah_punya_pengalaman"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Are You Have Experience?{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresh graduate">
                          Fresh Graduate
                        </SelectItem>
                        <SelectItem value="pernah bekerja">
                          Have Working
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="bg-white p-5 grid gap-4 rounded-xl">
            <p className="text-center">Company Profile</p>
            <div className="grid grid-cols-2 gap-3">
              {companyProfile.map((item) => (
                <FormField
                  control={form.control}
                  name={item.name}
                  key={item.name}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="h-fit flex items-start">
                        {item.placeholder}{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={`input your ${item.placeholder.toLowerCase()}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          <FormField
            control={form.control}
            name="daftar_skill"
            render={({ field }) => (
              <FormItem className="bg-white p-5 rounded-xl flex flex-col">
                <FormLabel>
                  Your Skills <span className="text-red-500">*</span>
                </FormLabel>
                <p className="text-[10px] tablet:text-[12px] italic">
                  ex: data analytic, design graphic
                </p>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid bg-white rounded-xl">
            <p className="text-center  rounded-tl-xl rounded-tr-xl pt-5 -mb-0">
              Your Exprerience{" "}
              <span className="text-xs text-red-500">(optional)</span>
            </p>
            <div className="flex flex-col rounded-xl gap-5 p-5">
              {experienceHistories.map((exp, index) => (
                <div>
                  <p>Experience {index + 1}</p>
                  <div
                    key={index}
                    className={`flex flex-wrap gap-3 bg-white ${
                      index > 0 && "rounded-xl"
                    }`}
                  >
                    {exp.map((item, i) => (
                      <FormField
                        key={i}
                        control={form.control}
                        name={item.name + (index + 1)}
                        render={({ field }) => (
                          <FormItem
                            className={`${
                              item.name == "deskripsi_pengalaman"
                                ? "w-full"
                                : "w-[47%]"
                            } flex flex-col`}
                          >
                            <FormLabel
                              className={`flex items-center ${
                                item.name == "deskripsi_pengalaman"
                                  ? "h-full"
                                  : "h-6 tablet:h-3"
                              }`}
                            >
                              {item.placeholder}
                            </FormLabel>
                            <FormControl>
                              {item.name === "durasi_pengalaman" ? (
                                <div className="flex justify-between gap-1 items-center">
                                  <Input
                                    {...field}
                                    className="text-center w-full"
                                    placeholder="0"
                                    type="number"
                                  />
                                  <span className="text-[11px] tablet:text-sm">
                                    month
                                  </span>
                                </div>
                              ) : (
                                <Input
                                  placeholder={`Input your ${item.placeholder.toLowerCase()}`}
                                  {...field}
                                />
                              )}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            className="-mt-6 self-center font-bold text-2xl bg-yellow-300 w-5 h-8"
            type="button"
            onClick={() => {
              experienceHistories.push(experienceHistories[0]);
              if (experienceHistories.length < 3) {
                setExperienceHistories([...experienceHistories]);
                experienceHistories.forEach((field, i) => {
                  field.forEach((item) => {
                    defaultValues[item.name + (i + 1)] = "";
                  });
                });
                experienceHistories.forEach((field, i) => {
                  field.forEach((item) => {
                    objectSchema[item.name + (i + 1)] = z.string();
                  });
                });
              }
            }}
          >
            +
          </Button>

          <Button type="submit" className="font-bold bg-blue-500 text-white text-xl">GENERATE NOW<img className="w-12" src="./generate-roket.gif" alt="" /></Button>
        </form>
      </Form>
    </div>
  );
}

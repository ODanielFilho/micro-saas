"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SheetFooter } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateProfile } from "../actions";
import { updateProfileSchema } from "../schema";

type ProfileFormProps = {
  defaultValues: Session["user"];
};

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      email: defaultValues?.email ?? "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data);
    router.refresh();

    toast({
      title: "Sucesso",
      description: "Seu perfil foi atualizado com sucesso.",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Nome</CardTitle>
            <CardDescription>
              Este será o nome exibido publicamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
            <CardDescription>
              Entre em contato pelo email contact@micro-saas.com para alterar o
              email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email" readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <SheetFooter className="mt-auto">
          <Button disabled={form.formState.isLoading} type="submit">
            {form.formState.isSubmitting && "Salvando..."}
            {!form.formState.isSubmitting && "Salvar alterações"}
          </Button>
        </SheetFooter>
      </form>
    </Form>
  );
}

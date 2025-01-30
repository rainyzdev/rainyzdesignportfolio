"use client";

import avatar from "@/assets/MehdiAlloui.jpg"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Palette, Layout, FileCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const expertise = [
  {
    title: "Web Design",
    description: "Turning your ideas into beautiful, engaging websites that people love to use.",
    icon: Palette,
    details: [
      "Responsive layouts",
      "Visual design",
      "Brand integration",
      "Tailwind CSS magic"
    ]
  },
  {
    title: "CMS Development",
    description: "Making content management a breeze with custom CMS solutions.",
    icon: Layout,
    details: [
      "Custom themes",
      "Content structure",
      "Easy-to-use templates",
      "CMS setup"
    ]
  },
  {
    title: "Next.js Frontend",
    description: "Building fast, modern websites with the latest web technologies.",
    icon: FileCode,
    details: [
      "Interactive UIs",
      "Fast page loads",
      "Smooth animations",
      "SEO optimization"
    ]
  }
];

type GitHubActivity = {
  type: string;
  repo: string;
  created_at: string;
};

export default function Home() {
  const [activities, setActivities] = useState<GitHubActivity[]>([]);

  useEffect(() => {
    // Replace 'your-github-username' with your actual GitHub username
    fetch('https://api.github.com/users/rainyzdev/events/public')
      .then(res => res.json())
      .then(data => {
        setActivities(data.slice(0, 5).map((event: any) => ({
          type: event.type,
          repo: event.repo.name,
          created_at: new Date(event.created_at).toLocaleDateString()
        })));
      })
      .catch(err => console.error('Error fetching GitHub activity:', err));
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-4 border-b border-gray-200">
        <div className="max-w-3xl text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto border-4 border-primary/10">
            <Image src={avatar} alt="Mehdi Alloui" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Hey, I&apos;m Mehdi! 👋
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mt-4">
              Your Friendly Web Designer
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I love crafting websites that not only look amazing but also tell your story perfectly. 
            Whether you need a stunning portfolio, a sharp business site, or a creative platform, 
            I&apos;m here to bring your vision to life with style and personality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" asChild>
              <Link href="mailto:mehdi@buzfind.com">
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s Chat!
              </Link>
            </Button>
            <Button className="hover:line-through" variant="outline" asChild>
              <Link href="">
                See My Work
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/rainyzdev" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/mehdi-alloui-a79702299/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" >Latest Projects</h2>
          <div className="space-y-4">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-4">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{activity.repo}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.type.replace('Event', '')} - {activity.created_at}
                      </p>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-4">
                <p className="text-center text-muted-foreground">Loading GitHub activity...</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Make Something Cool?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Got an exciting project in mind? I&apos;d love to help bring it to life! Let&apos;s work together
            to create a website that perfectly captures your style and connects with your audience.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:mehdi@buzfind.com">
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2025 Mehdi Alloui | Creating Beautiful Digital Experiences
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/rainyzdev" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/mehdi-alloui-a79702299/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:mehdi@buzfind.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
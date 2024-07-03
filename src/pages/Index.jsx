import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Product</h1>
        <p className="text-xl mb-8">The best solution for your business needs.</p>
        <Button size="lg">Get Started</Button>
        <img width="600" height="400" src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover mt-8" />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User One</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"This product is amazing!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User Two</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"It has changed the way we do business."</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User Three</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Highly recommend to everyone."</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-800 text-white text-center">
        <div className="mb-8">
          <img width="100" height="100" src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover" />
          <p className="mt-4">Company Name</p>
          <p>Brief description of the company.</p>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Features</a>
          <a href="#" className="text-white">Pricing</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className="mt-8">
          <p>Contact us: email@example.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
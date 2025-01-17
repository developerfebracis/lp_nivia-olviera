import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const videoLinks = [
    "./videos/video1nivia.mp4",
    "./videos/video2nivia.mp4",
    "./videos/video3nivia.mp4",
    "./videos/video4nivia.mp4"
];
const Section3Mobile = () => {
    return ( 
        <div className="flex justify-center gradient-backgroundS3">
            <div className="flex flex-col items-center py-12">
                <h1 className="h1">Histórias de transformação</h1>
                <div>
                    <p className="p1">Arraste para o lado para ver mais histórias</p>
                </div>
                <div className="py-12 w-full max-w-sm">
                <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {videoLinks.map((link, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            <video 
                                                width="100%" 
                                                height="315" 
                                                src={link} 
                                                title="Video player" 
                                                controls
                                            >
                                            </video>
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
                </div>
            </div>
            
        </div>
     );
}
 
export default Section3Mobile;
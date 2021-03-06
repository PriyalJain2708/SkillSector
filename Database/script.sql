USE [master]
GO
/****** Object:  Database [Skills]    Script Date: 1/29/2021 7:04:20 AM ******/
CREATE DATABASE [Skills]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Skills', FILENAME = N'C:\Users\user\Skills.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Skills_log', FILENAME = N'C:\Users\user\Skills_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Skills] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Skills].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Skills] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Skills] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Skills] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Skills] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Skills] SET ARITHABORT OFF 
GO
ALTER DATABASE [Skills] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Skills] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Skills] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Skills] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Skills] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Skills] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Skills] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Skills] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Skills] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Skills] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Skills] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Skills] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Skills] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Skills] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Skills] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Skills] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Skills] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Skills] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Skills] SET  MULTI_USER 
GO
ALTER DATABASE [Skills] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Skills] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Skills] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Skills] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Skills] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Skills] SET QUERY_STORE = OFF
GO
USE [Skills]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [Skills]
GO
/****** Object:  Table [dbo].[ProgrammerInformationList]    Script Date: 1/29/2021 7:04:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProgrammerInformationList](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[title] [nvarchar](50) NULL,
	[description] [nvarchar](1000) NULL,
	[company] [nvarchar](50) NULL,
	[phone_no] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[type] [nvarchar](50) NULL,
	[imagesrc] [nvarchar](500) NULL,
	[resume] [nvarchar](500) NULL,
	[links] [nvarchar](500) NULL,
	[location] [nvarchar](50) NULL,
	[city] [nvarchar](50) NULL,
	[street_address] [nvarchar](50) NULL,
	[zipcode] [nvarchar](50) NULL,
	[skills] [nvarchar](50) NULL,
	[tags] [nvarchar](50) NULL,
	[date] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProgrammerInformationList] ON 

INSERT [dbo].[ProgrammerInformationList] ([user_id], [name], [title], [description], [company], [phone_no], [email], [type], [imagesrc], [resume], [links], [location], [city], [street_address], [zipcode], [skills], [tags], [date]) VALUES (1, N' Swati Nair', N'Software Developer', N'Experienced Web Developer with a demonstrated history of working in the computer software industry. Skilled in Web Development with experienced knowledge of Search Engine Optimization (SEO) and Photoshop skills, Strong engineering professional with a Bachelor of Engineering - BE specialization in Information Technology from Shri Shankaracharya Technical Campus Bhilai.', N'IT', N'987699231', N'swati23@gmail.com', N'Candidate', N'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg', N'https://i.pinimg.com/originals/55/75/24/557524fa37bbf9cfae04683b2c526024.jpg', N'https://www.linkedin.com/in/swati-rai-041a41169/', N'India', N'Durg', N'New Durg', N'491001', N'React JS, React Native', N'CSE Engineer', N'20/01/2021')
INSERT [dbo].[ProgrammerInformationList] ([user_id], [name], [title], [description], [company], [phone_no], [email], [type], [imagesrc], [resume], [links], [location], [city], [street_address], [zipcode], [skills], [tags], [date]) VALUES (2, N'Payal Rani', N'Software Engineer', N'An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in INFORMATION TECHNOLOGY.
Expert in implementation of each step of project.
Eager to learn new technologies and methodologies.
Always willing to innovate the new things which can improve the existing technology.', N'CSE', N'875643881', N'jpayal11@gmail.com', N'Fresher', N'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg', N'https://i.pinimg.com/originals/5d/74/d3/5d74d30e904b2ede6351f465a397fed8.jpg', N'https://www.linkedin.com/in/payal-rani-2b6a04176/', N'India', N'Bhilai', N'Bhilai 3', N'491001', N'.NET Developer, IOS Developer', N'IT Engineer', N'19/01/2021')
INSERT [dbo].[ProgrammerInformationList] ([user_id], [name], [title], [description], [company], [phone_no], [email], [type], [imagesrc], [resume], [links], [location], [city], [street_address], [zipcode], [skills], [tags], [date]) VALUES (3, N'Howard Austin', N'UI/UX Designer', N'Experienced Senior Project Executive with a demonstrated history of working in the internet industry. Skilled in Microsoft Excel, Customer Service, Microsoft Word, C++, and Public Speaking. Strong business development professional graduated from ies college bhopal.', N'Graphic Design', N'875677328', N'howard12@gmail.com', N'Freelancer', N'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', N'https://images.template.net/3963/Free-Basic-Resume-Template-440x570-1.jpg', N'https://www.linkedin.com/in/howard-austin-77181319/', N'Africa', N'Cape Town', N'21 street north west', N'0299', N'Photoshop, Corel Draw', N'Designer', N'18/01/2021')
INSERT [dbo].[ProgrammerInformationList] ([user_id], [name], [title], [description], [company], [phone_no], [email], [type], [imagesrc], [resume], [links], [location], [city], [street_address], [zipcode], [skills], [tags], [date]) VALUES (4, N'John W.Smith', N'.NET Developer', N'Experience in Banking Domain and Oilfield Services & Equipment. Enthusiastic about developing forward-thinking solutions to tomorrow’s productivity problems.', N'CSE', N'765489042', N'john23@gmail.com', N'Exprienced Developer', N'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg', N'https://writing.colostate.edu/guides/documents/resume/functionalSample.pdf', N'https://www.linkedin.com/in/readiminds/?originalSubdomain=sg', N'America', N'Seattle', N'West Side downroad', N'72217', N'SQL, Oracle', N'Engineer', N'11/01/2021')
SET IDENTITY_INSERT [dbo].[ProgrammerInformationList] OFF
GO
USE [master]
GO
ALTER DATABASE [Skills] SET  READ_WRITE 
GO
